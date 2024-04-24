/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./usersSlice";

function UsersView() {
    //@ts-ignore
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  console.log(users)
  useEffect(() => {
    //@ts-ignore
    dispatch(getUsers({page: 1}));
  },[]) 
  return (
    <div>UsersView</div>
  )
}

export default UsersView