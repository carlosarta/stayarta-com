import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock Data Interface (to be replaced by actual Supabase types)
type TableName = 'users' | 'products' | 'orders' | 'analytics' | 'audit_logs';

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

  // Mock Fetcher - In real app, this connects to Supabase Client
  const fetchData = async <T,>(table: TableName, query?: any): Promise<T[]> => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate Network Delay
      await new Promise(resolve => setTimeout(resolve, 800)); 
      console.log(`[Database] Fetching from ${table}`, query);
      
      // Return empty array for now as we don't have the real DB connected
      // Individual components will fall back to their MOCK_DATA constants if this returns empty
      // or we can inject mocks here.
      return []; 
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
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`[Database] Upserting into ${table}`, data);
        return data as T;
    } catch (err) {
        setError(err as Error);
        return null;
    } finally {
        setIsLoading(false);
    }
  };

  const deleteData = async (table: TableName, id: string): Promise<boolean> => {
     console.log(`[Database] Deleting from ${table}: ${id}`);
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
