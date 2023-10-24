import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
} from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useSelector as useAppSelector } from "react-redux";

export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
