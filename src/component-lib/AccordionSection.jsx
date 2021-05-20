import React, { Component } from "react";
import { TableSide, FormBuilder } from '@loanbossinc/component-library';

export class AccordionSection extends Component {

  render() {
    const { data, rows, eventHandlers } = this.props

    return <TableSide rows={rows} data={data} eventHandlers={eventHandlers} />;
  }
}

export class AccordionEditSection extends Component {

  render() {
    const { data, rows, onSubmit, isSaving, isCanceling, onCancel, finishSave, configItems, saveOrderChange, eventHandlers } = this.props;
    
    return <FormBuilder 
              className="d-flex f-1 flex-column"
              rows={rows}
              data={data}
              configItems={configItems}
              initialValues={data}
              onSubmit={onSubmit}
              isSaving={isSaving}
              isCanceling={isCanceling}
              onCancel={onCancel}
              finishSave={finishSave}
              saveOrderChange={saveOrderChange}
              eventHandlers={eventHandlers}
              />;
  }
}
