import React from 'react'
import { Form, Select, InputNumber, DatePicker, Radio, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class ExpenseForm extends React.Component {
  constructor(props) {
    super (props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.operate('EXPENSE',values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="From"
          hasFeedback
        >
          {getFieldDecorator('account', {
            rules: [
              { required: true, message: 'Please select an account!' },
            ],
          })(
            <Select placeholder="Please select an account">
              <Option value="user1">User1</Option>
              <Option value="user2">User2</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Amount"
        >
          {getFieldDecorator('amount')(
            <InputNumber min={0}/>
          )}
          <span className="ant-form-text"> INR </span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Date"
        >
          {getFieldDecorator('date-picker', {rules: [{ type: 'object', required: true, message: 'Please select time!' }],})(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Add Expense</Button>
        </FormItem>
      </Form>
    );
  }
}

const Expense = Form.create()(ExpenseForm);

export default Expense;