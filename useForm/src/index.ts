import * as React from 'react';

export function useForm<T extends Record<string, string | object>>(init: T) {
  const [state, setState] = React.useState<T>(init);
  const handleChange = (key: keyof T, val: string) => {
    setState({ ...state, [key]: val });
  };

  return [state, handleChange] as const;
}
