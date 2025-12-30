import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const SDS_Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, id, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="text-xs font-mono font-medium text-st-bonewhite/60 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-st-bonewhite/40 group-focus-within:text-st-cyan transition-colors">
              {icon}
            </div>
          )}
          <input
            id={id}
            ref={ref}
            className={cn(
              "flex h-11 w-full rounded-md border border-white/10 bg-st-dark/50 px-3 py-2 text-sm text-white ring-offset-st-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-st-bonewhite/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-st-cyan focus-visible:border-st-cyan disabled:cursor-not-allowed disabled:opacity-50 transition-all backdrop-blur-sm",
              icon && "pl-10",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-red-500 font-mono mt-1">{error}</p>
        )}
      </div>
    );
  }
);
SDS_Input.displayName = "SDS_Input";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const SDS_TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, label, error, id, ...props }, ref) => {
      return (
        <div className="space-y-2 w-full">
          {label && (
            <label 
              htmlFor={id} 
              className="text-xs font-mono font-medium text-st-bonewhite/60 uppercase tracking-wider"
            >
              {label}
            </label>
          )}
          <textarea
            id={id}
            ref={ref}
            className={cn(
              "flex min-h-[80px] w-full rounded-md border border-white/10 bg-st-dark/50 px-3 py-2 text-sm text-white ring-offset-st-black placeholder:text-st-bonewhite/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-st-cyan focus-visible:border-st-cyan disabled:cursor-not-allowed disabled:opacity-50 transition-all backdrop-blur-sm resize-none",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            {...props}
          />
          {error && (
            <p className="text-xs text-red-500 font-mono mt-1">{error}</p>
          )}
        </div>
      );
    }
  );
  SDS_TextArea.displayName = "SDS_TextArea";
