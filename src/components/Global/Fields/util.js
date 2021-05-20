import {
    isEmpty
} from "lodash";

export function setConfigItemListState(parentId, statePropName, page) {
  let configItemsByParent = page.props.configItems.configItemByParent[parentId];
    if (!isEmpty(configItemsByParent) && page.state[statePropName].length === 0) {
        
        console.log('setConfigItemListState');
        page.setState({
            ...page.state,
            [statePropName]: configItemsByParent.map(
                item => ({
                    value: item.id,
                    label: item.name
                })
            )
        });
    }
}

export function setEnumeratedTypesListState(type, statePropName, page) {
    if (
        !isEmpty(page.props.enumeratedTypes[type]) &&
        page.state[statePropName].length === 0
    ) {
        console.log('setEnumeratedTypesListState');
        page.setState({
            ...page.state,
            [statePropName]: page.props.enumeratedTypes[type].map(
                item => ({
                    value: item.id,
                    label: item.name || item.value
                })
            )
        });
    }
}


export function setEnumeratedTypesContactsListState(type, statePropName, page) {
    if (
        !isEmpty(page.props.enumeratedTypes[type]) &&
        page.state[statePropName].length === 0
    ) {
        
        console.log('setEnumeratedTypesContactsListState');
        page.setState({
            ...page.state,
            [statePropName]: page.props.enumeratedTypes[type].map(
                item => ({
                    value: item.id,
                    label: `${item.firstName ? item.firstName :""} ${item.lastName ? item.lastName : ""}`,
                })
            )
        });
    }
}

export function setEnumeratedFundNames(type, statePropName, page, additionalKey) {
    if (!isEmpty(page.props.enumeratedTypes[type]) &&
        !isEmpty(page.props.enumeratedTypes[type][additionalKey]) &&
        page.state[statePropName].length === 0) {
            console.log('setEnumeratedFundNames');
            page.setState({
                ...page.state,
                [statePropName]: page.props.enumeratedTypes[type][additionalKey].map(
                    item => ({
                        value: item.id,
                        label: item.name || item.value
                    })
                )
            });
    }
}
