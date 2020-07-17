export declare function useForm<T extends Record<string, string | object>>(init: T): readonly [T, (key: keyof T, val: string) => void];
