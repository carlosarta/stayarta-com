import React, { createContext, useContext, useState } from 'react';
import { supabase } from '../lib/supabase';

type TableName = string;

interface DatabaseContextType {
  isLoading: boolean;
  error: Error | null;
  fetchData: <T>(table: TableName, query?: any) => Promise<T[]>;
  upsertData: <T>(table: TableName, data: Partial<T>) => Promise<T | null>;
  deleteData: (table: TableName, id: string) => Promise<boolean>;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export const DatabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async <T,>(table: TableName, query?: any): Promise<T[]> => {
    setIsLoading(true);
    setError(null);
    try {
      if (!supabase) {
        throw new Error('Supabase client is not configured');
      }
      let builder = supabase.from(table).select(query?.select ?? '*');
      if (query?.filters && typeof query.filters === 'object') {
        Object.entries(query.filters).forEach(([key, value]) => {
          builder = builder.eq(key, value);
        });
      }
      const { data, error: supaError } = await builder;
      if (supaError) throw supaError;
      return (data ?? []) as T[];
    } catch (err) {
      setError(err as Error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const upsertData = async <T,>(table: TableName, data: Partial<T>): Promise<T | null> => {
    setIsLoading(true);
    try {
        if (!supabase) {
          throw new Error('Supabase client is not configured');
        }
        const { data: upserted, error: supaError } = await supabase
          .from(table)
          .upsert(data as any)
          .select()
          .single();
        if (supaError) throw supaError;
        return upserted as T;
    } catch (err) {
        setError(err as Error);
        return null;
    } finally {
        setIsLoading(false);
    }
  };

  const deleteData = async (table: TableName, id: string): Promise<boolean> => {
     if (!supabase) {
       setError(new Error('Supabase client is not configured'));
       return false;
     }
     const { error: supaError } = await supabase
       .from(table)
       .delete()
       .eq('id', id);
     if (supaError) {
       setError(supaError);
       return false;
     }
     return true;
  };

  return (
    <DatabaseContext.Provider value={{ isLoading, error, fetchData, upsertData, deleteData }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) throw new Error('useDatabase must be used within a DatabaseProvider');
  return context;
};
