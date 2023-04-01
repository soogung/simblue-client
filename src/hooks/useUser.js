import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../utils/api/user";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../utils/constant/user.constant";
import { userState } from "../utils/atom/user";

export const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const { data } = useQuery(["getUserInfo"], () => getUserInfo(), {
    enabled: !!localStorage.getItem(ACCESS_TOKEN),
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [setUser, data, navigate]);

  return {
    user: user || {
      authority: "",
      email: "",
      name: "",
      roleId: 0,
    },
  };
};
