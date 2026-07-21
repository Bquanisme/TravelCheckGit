import { Button } from "antd";
import Text from "antd/es/typography/Text";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../redux/example/actions/get-api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import type { RootState } from "../../redux/store";

const ExamplePage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { data, loading } = useAppSelector((state: RootState) => state.example);
    const onClick = () => {
        navigate("get-start");
    };
    
    console.log(data);
    useEffect(() => {
        dispatch(getApi())
    }, [])
    return (
        <>
            <Text>Hello Example</Text>
            <Button onClick={onClick}>Chuyển trang</Button>
        </>
    );
};

export default ExamplePage;
