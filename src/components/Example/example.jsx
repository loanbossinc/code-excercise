import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Flex from "components/Global/PageOrganization/Flex";
import { PageHeader } from "./PageHeader";
import { Card, InputCard, InputCardHeader } from '../Global/Card';
import { EditableField } from '../EditableField';
import { StyledEditButton } from './ButtonStyles';
import { GetUserAction } from '../../store/actions/userActions'
import { ROUTE_EDIT_PERSONAL, ROUTE_EDIT_CONTACT } from "constants/routes";

const Example = React.memo((props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userInfo = useSelector((s) => s.user.userInfo);

    useEffect(() => {
        dispatch(GetUserAction())
    }, [])

    const ActionButtonSection = (props) =>
        <Flex style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <StyledEditButton onClick={props.onClick}>Edit Details</StyledEditButton>
        </Flex>

    const { firstName, lastName, title, jobFunction, email, phone, street, city, state, zipcode } = userInfo;

    return (
        <Flex style={{ flexDirection: 'column', flex: 1 }}>
            <PageHeader>
                Your LoanBoss Profile
            </PageHeader>
            <Flex style={{ justifyContent: 'center', paddingTop: 50 }}>
                <Flex style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Card style={{ minWidth: 400, background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ margin: 5, color: 'blue' }}>Cool</span> <span style={{ margin: 5, color: 'green' }}>extra</span> <span style={{ margin: 5, color: 'orange' }}>stuff</span> <span style={{ margin: 5, color: 'pink' }}>here</span>
                    </Card>
                </Flex>
                <Flex style={{ marginLeft: 50, flex: 1.3, justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <InputCard style={{ minWidth: 600, background: 'white', marginBottom: 20 }}>
                        <InputCardHeader>
                            <span style={{ whiteSpace: 'nowrap' }}>Personal Information</span>
                            <ActionButtonSection onClick={() => history.push(ROUTE_EDIT_PERSONAL)} />
                        </InputCardHeader>
                        <EditableField label="Name" disabled value={!firstName && !lastName ? 'N/A' : `${firstName}  ${lastName}`} />
                        <EditableField label="Title" disabled value={title || 'N/A'} />
                        <EditableField label="Function" disabled value={jobFunction || 'N/A'} />
                    </InputCard>
                    <InputCard style={{ minWidth: 600, background: 'white' }}>
                        <InputCardHeader>
                            <span style={{ whiteSpace: 'nowrap' }}>Contact Information</span>
                            <ActionButtonSection onClick={() => history.push(ROUTE_EDIT_CONTACT)} />
                        </InputCardHeader>
                        <EditableField label="Email" disabled value={email || 'N/A'} />
                        <EditableField label="Phone Number" disabled value={phone || 'N/A'} />
                        <EditableField label="Address" disabled value={!street && !city && !state && !zipcode ? 'N/A' : `${street}, ${city}, ${state} ${zipcode}`} />
                    </InputCard>
                </Flex>
            </Flex>
        </Flex >
    );
})

export default Example;
