import React, { useState } from 'react';
import {
  Form, Select, Input, DatePicker, Radio, Slider, Switch, Checkbox,
} from 'antd';
import _ from 'lodash';

import { flexLayout as formItemLayout } from '@src/constants/layout';

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;
const { Group } = Radio;
const { RangePicker } = DatePicker;

export default function FormItem(props) {
  const renderOptions = () => {
    const { options, customOption } = props.conf;
    if (!_.isArray || _.isEmpty(options)) {
      return null;
    }
    if (customOption) {
      return options;
    }
    return options && options.map((option) => <Option key={option.key}>{option.value}</Option>);
  };

  const renderElem = () => {
    const {
      type,
      width,
      placeholder,
      mode,
      onChange,
      onClick,
      onOk,
      rows,
      autoFocus,
      htmlType,
      disabled,
      prefix,
      allowClear,
      options,
      optionType,
      size,
      showTime,
      format,
      initChecked,
      checked,
    } = props.conf;

    const elems = {
      Input: (
        <Input
          placeholder={placeholder}
          autoFocus={autoFocus}
          type={htmlType}
          disabled={disabled}
          onChange={onChange}
          prefix={prefix}
        />
      ),
      Password: (
        <Input.Password
          placeholder={placeholder}
          autoFocus={autoFocus}
          type={htmlType}
          disabled={disabled}
          onChange={onChange}
          prefix={prefix}
        />
      ),
      TextArea: (
        <TextArea
          placeholder={placeholder}
          style={{ resize: 'none' }}
          rows={rows || 3}
          onChange={onChange}
        />
      ),
      Select: (
        <Select
          placeholder={placeholder}
          mode={mode}
          allowClear={allowClear}
          onChange={onChange}
        >
          { renderOptions() }
        </Select>
      ),
      DatePicker: (
        <DatePicker
          style={{ width }}
          placeholder={placeholder}
        />
      ),
      RangePicker: (
        <RangePicker
          format={format || 'YYYY-MM-DD'}
          showTime={showTime}
          placeholder={placeholder}
          onChange={onChange}
          onOk={onOk}
        />
      ),
      Radio: (
        <Group
          options={options}
          onChange={onChange}
          value={(options && options.length !== 0) ? options[0].value : ''}
          optionType={optionType || 'button'}
          size={size}
        />
      ),
      Checkbox: (
        <Checkbox.Group
          options={options}
          onChange={onChange}
        />
      ),
      Slider: (
        <Slider range />
      ),
      Switch: (
        <Switch
          // defaultChecked={initChecked}
          onChange={onChange}
          onClick={onClick}
          disabled={disabled || false}
        />
      ),
    };

    if (!elems[type]) {
      throw new Error(`🤨 -> error type of FormItem: ${type}`);
    }

    return elems[type];
  };

  const {
    layout,
    dataIndex,
    rules,
    initialValue,
    valuePropName,
    style,
  } = props.conf;

  const { label } = props.conf;

  return (
    <Item
      label={label}
      {...layout || formItemLayout}
      style={style}
      name={dataIndex || ''}
      rules={rules || []}
      initialValue={initialValue}
      valuePropName={valuePropName || 'value'}
    >
      { renderElem() }
    </Item>
  );
}
