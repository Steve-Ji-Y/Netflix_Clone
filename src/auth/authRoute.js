import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'


export function PublicRoute({children}) {

  const { uid } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (uid) {
      navigate('/browse')
    }
  }, [uid, navigate])

  return children;
}


export function PrivateRoute({children} ) {

  const { uid } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!uid) {
      navigate('/login');
    }
  }, [uid, navigate])

  return children;
}
