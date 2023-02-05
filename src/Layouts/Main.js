import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavbarSection from '../pages/shearPages/NavbarSection';
import { fetchingContent, fetchingTags } from '../redux/thunk/fetching';

const Main = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchingContent())
      dispatch(fetchingTags())
    },[dispatch])
    return (
        <div>
            <NavbarSection></NavbarSection>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;