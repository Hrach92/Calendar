import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useDispatch = (): any => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
