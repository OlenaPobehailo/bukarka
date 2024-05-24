import { useDispatch } from "react-redux";
import { IAppDispatch } from "./store";
// import { useSelector } from "react-redux"

export const useAppDispatch: () => IAppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
