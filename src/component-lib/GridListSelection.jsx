import React from 'react';
import styled from "styled-components";
import CheckIcon from '@material-ui/icons/Check';
import { GridListTile, GridList } from '@material-ui/core';

const Unselected = styled.div`
.content {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

& {
  display: flex;
  flex: 1;
  height: inherit;
  padding-left: 8px;
  padding-right: 8px;

  align-items:center;
  background:#f5f5f5;
  font-size:17px;
  justify-content:flex-start;  
  text-align:left;
  transition: 0.3s background, 0.3s color, 0.3s border;
}
&:hover {
  background:#f9f9f9;
  cursor:pointer    
}
`;

const Selected = styled(Unselected)`
  & {
    background: #2196f3;
    color:#fff;
  }

  &.selected {    
    background: #2196f3;
    color:white;            
  }
  
  &:hover {
    background:#43A8FF;
    cursor:pointer    
  }
`;

const Spacer = styled.div`flex-grow:1;`;

export class GridListSelection extends React.Component {

  getGridListTile = (item) => {
    return (
      <GridListTile
        key={item.id}
        cols={1}
      >
        {this.props.isSelected(item) ? this.getSelectedTile(item) : this.getUnselectedTile(item)}
      </GridListTile>
    )
  }

  getSelectedTile = (item) => (
    <Selected
      cols={1}
      onClick={() => this.props.onToggle(item)}
    >
      <div className="content">
        {this.props.display(item)}
      </div>
      <Spacer />
      <CheckIcon />
    </Selected>
  )

  getUnselectedTile = (item) => (
    <Unselected
      cols={1}
      onClick={() => this.props.onToggle(item)}
    >
      <div className="content">
        {this.props.display(item)}
      </div>
      <Spacer />
    </Unselected>
  )

  render() {
    const { key, display, cols, spacing, items, cellHeight } = this.props;
    return (
      <GridList
        style={this.props.style}
        cellHeight={cellHeight}
        cols={cols}
        spacing={spacing}

      >
        {items.map(item => this.getGridListTile(item))}
      </GridList>
    );
  }
}
