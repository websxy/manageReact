export const registrationS = [{
    type: 'Input',
    label: 'ID查询',
    required: false,
    placeholder: '请输入id',
    parameter: 'id',
  }, {
    type: 'Select',
    label: '科目查询',
    required: false,
    placeholder: '请选择',
    parameter: 'subject',
    options: [{value:1,text:'1111111'},{value:2,text:'222222222222222'}]
    
  }, {
    type: 'DatePicker',
    label: '科目查询',
    required: false,
    placeholder: '请选择',
    parameter: 'date',
  }];