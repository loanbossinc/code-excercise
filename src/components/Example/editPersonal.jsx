import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Flex from "components/Global/PageOrganization/Flex";
import { PageHeader } from "./PageHeader";
import { InputCard, InputCardHeader } from '../Global/Card';
import { EditableDropdown, EditableField } from '../EditableField';
import { StyledEditButton, StyledCancelButton } from './ButtonStyles';
import { GetUserAction, PutPersonalInfoAction } from '../../store/actions/userActions'
import { ROUTE_APP_LANDING } from "constants/routes";
import { JobFunctions } from '../../constants/jobFunctions';

const EditPersonal = React.memo((props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loading = useSelector((s) => s.user.personalLoading)
    const userInfo = useSelector((s) => s.user.userInfo);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [jobFunction, setJobFunction] = useState(null);

    const canSubmit = useMemo(() => jobFunction && title && firstName && lastName, [jobFunction, title, firstName, lastName])

    useEffect(() => { dispatch(GetUserAction()) }, [])

    const resetState = () => {
        setFirstName(userInfo.firstName);
        setLastName(userInfo.lastName);
        setTitle(userInfo.title);
        setJobFunction(JobFunctions.find(o => o.value === userInfo.jobFunction));
    }

    useEffect(() => { if (!loading) resetState() }, [userInfo, loading])

    const handleSave = async () => {
        await dispatch(PutPersonalInfoAction({ firstName, lastName, title, jobFunction: jobFunction.value }))
        history.push(ROUTE_APP_LANDING)
    }
    const handleCancel = () => { resetState(); history.push(ROUTE_APP_LANDING); }

    const ActionButtonSection = () => (
        <Flex style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <StyledCancelButton onClick={() => handleCancel()}>Cancel</StyledCancelButton>
            <StyledEditButton disabled={!canSubmit} onClick={() => handleSave()}>Save</StyledEditButton>
        </Flex>
    )

    return (
        <Flex style={{ flexDirection: 'column', flex: 1 }}>
            <PageHeader>
                Edit Your Personal Info
            </PageHeader>
            <Flex style={{ justifyContent: 'center', paddingTop: 50 }}>
                <Flex style={{ marginLeft: 50, flex: 1.3, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <InputCard style={{ minWidth: 600, background: 'white', marginBottom: 20 }}>
                        <InputCardHeader>
                            <span style={{ whiteSpace: 'nowrap' }}>Personal Information</span>
                            <ActionButtonSection />
                        </InputCardHeader>
                        <EditableField label="First Name" value={firstName} onChange={({ target }) => setFirstName(target.value)} />
                        <EditableField label="Last Name" value={lastName} onChange={({ target }) => setLastName(target.value)} />
                        <EditableField label="Title" value={title} onChange={({ target }) => setTitle(target.value)} />
                        <EditableDropdown label="Function" onChange={setJobFunction} options={JobFunctions} value={jobFunction} />
                    </InputCard>
                </Flex>
            </Flex>
        </Flex >
    );
})

export default EditPersonal;
