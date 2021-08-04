import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Flex from "components/Global/PageOrganization/Flex";
import { PageHeader } from "./PageHeader";
import { InputCard, InputCardHeader } from '../Global/Card';
import { EditableField, EditableDropdown } from '../EditableField';
import { StyledEditButton, StyledCancelButton } from './ButtonStyles';
import { GetUserAction, PutContactInfoAction } from '../../store/actions/userActions'
import { ROUTE_APP_LANDING } from "constants/routes";
import { states } from '../../constants/states';

const EditContact = React.memo((props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const loading = useSelector((s) => s.user.contactLoading)
    const userInfo = useSelector((s) => s.user.userInfo);

    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState(null);
    const [zipcode, setZip] = useState(null);
    const [street, setStreet] = useState('');

    const canSubmit = useMemo(() => email && phone && city && state && zipcode && street, [email, phone, city, state, zipcode, street])

    useEffect(() => { dispatch(GetUserAction()) }, [])

    const resetState = () => {
        setEmail(userInfo.email);
        setPhoneNumber(userInfo.phone);
        setCity(userInfo.city);
        setState(states.find(s => s.value === userInfo.state));
        setZip(userInfo.zipcode);
        setStreet(userInfo.street);
    }

    useEffect(() => { if (!loading) resetState() }, [userInfo, loading])

    const handleSave = async () => {
        await dispatch(PutContactInfoAction({ email, phone, city, state: state?.value, zipcode, street }))
        history.push(ROUTE_APP_LANDING)
    }
    const handleCancel = () => { resetState(); history.push(ROUTE_APP_LANDING); }

    const ActionButtonSection = () =>
        <Flex style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <StyledCancelButton onClick={() => handleCancel()}>Cancel</StyledCancelButton>
            <StyledEditButton disabled={!canSubmit} onClick={() => handleSave()}>Save</StyledEditButton>
        </Flex>

    return (
        <Flex style={{ flexDirection: 'column', flex: 1 }}>
            <PageHeader>
                Edit Your Contact Info
            </PageHeader>
            <Flex style={{ justifyContent: 'center', paddingTop: 50 }}>
                <Flex style={{ marginLeft: 50, flex: 1.3, justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center' }}>
                    <InputCard style={{ minWidth: 600, background: 'white' }}>
                        <InputCardHeader>
                            <span style={{ whiteSpace: 'nowrap' }}>Contact Information</span>
                            <ActionButtonSection />
                        </InputCardHeader>
                        <EditableField label={`Email ${userInfo.email ? `(Cannot Edit)` : ''}`} disabled={userInfo.email} onChange={({ target }) => setEmail(target.value)} value={email} />
                        <EditableField phone label="Phone Number" onChange={({ target }) => setPhoneNumber(target.value)} value={phone} />
                        <EditableField label="City" onChange={({ target }) => setCity(target.value)} value={city} />
                        <EditableDropdown label="State" onChange={setState} options={states} value={state} />
                        <EditableField type="number" label="ZipCode" onChange={({ target }) => setZip(target.value)} value={zipcode} />
                        <EditableField label="Street" onChange={({ target }) => setStreet(target.value)} value={street} />
                    </InputCard>
                </Flex>
            </Flex>
        </Flex >
    );
})


export default EditContact;
