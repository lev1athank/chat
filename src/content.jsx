import Chat from './UI/chat/chat'
import Authorisation from './page/authorisation/authorisation'
import { useNavigate, Routes, Route } from 'react-router-dom';
import Dissemination from './page/dissemination/dissemination';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './store/authorizedAccess/authorizedAccess';



const content = () => {
    const navigate = useNavigate();
    const { authAccesSlice } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuth())
    }, [])

    useEffect(() => {
        if (authAccesSlice.IsAuth)
            navigate("/chat");
        else
            navigate("/authorisation");

    }, [authAccesSlice.IsAuth])

    return (
        <Routes>
            <Route path="/" element={<Dissemination />} />
            <Route path="/authorisation" element={<Authorisation />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>

    )
}

export default content