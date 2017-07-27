import React from 'react';
import {Component, Property, Value} from '../../docs';

const halignLeft = `
<Grid halign="left">
  <Grid.Unit width={0.25}>#1</Grid.Unit>
  <Grid.Unit width={0.25}>#2</Grid.Unit>
</Grid>
`;

const halignCenter = `
<Grid halign="center">
  <Grid.Unit width={0.25}>#1</Grid.Unit>
  <Grid.Unit width={0.25}>#2</Grid.Unit>
</Grid>
`;

const halignRight = `
<Grid halign="right">
  <Grid.Unit width={0.25}>#1</Grid.Unit>
  <Grid.Unit width={0.25}>#2</Grid.Unit>
</Grid>
`;

const halignJustifyCenter = `
<Grid halign="justify-center">
  <Grid.Unit width={0.25}>#1</Grid.Unit>
  <Grid.Unit width={0.25}>#2</Grid.Unit>
</Grid>
`;

const halignJustify = `
<Grid halign="justify">
  <Grid.Unit width={0.25}>#1</Grid.Unit>
  <Grid.Unit width={0.25}>#2</Grid.Unit>
</Grid>
`;

const Halign = () => (
  <Component name="Grid">
    <Property name="halign">
      <Value name="left" example={halignLeft}/>
      <Value name="center" example={halignCenter}/>
      <Value name="right" example={halignRight}/>
      <Value name="justify" example={halignJustify}/>
      <Value name="justify-center" example={halignJustifyCenter}/>
    </Property>
  </Component>
);

export default Halign;
