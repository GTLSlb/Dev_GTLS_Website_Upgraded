export interface UseDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
