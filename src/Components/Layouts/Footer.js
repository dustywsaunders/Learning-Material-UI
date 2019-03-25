import React from 'react';
import { Paper, Tabs, Tab, withWidth } from '@material-ui/core';

export default withWidth()(
  ({ muscles, category, onSelect, width }) => {
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1])
  }

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== 'xs'}
        variant={width === 'xs' ? "scrollable" : null}
        scrollButtons="on"
      >
        <Tab label="All" key="All"/>
        { muscles.map(group =>
          <Tab label={group} key={group}/>
        )}
      </Tabs>
    </Paper>
  );
})

