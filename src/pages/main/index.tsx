import React, {useState} from 'react';
import {Steps, Button, Picker, Input, Cascader} from 'antd-mobile'
import "./index.css"

const Main = () => {
    const {Step} = Steps;
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState<string[]>([])

    const options = [
        {
            label: '浙江',
            value: '浙江',
            children: [
                {
                    label: '杭州',
                    value: '杭州',
                    children: [
                        {
                            label: '西湖区',
                            value: '西湖区',
                        },
                        {
                            label: '上城区',
                            value: '上城区',
                        },
                        {
                            label: '余杭区',
                            value: '余杭区',
                            disabled: true,
                        },
                    ],
                },
                {
                    label: '温州',
                    value: '温州',
                    children: [
                        {
                            label: '鹿城区',
                            value: '鹿城区',
                        },
                        {
                            label: '龙湾区',
                            value: '龙湾区',
                            disabled: true,
                        },
                        {
                            label: '瓯海区',
                            value: '瓯海区',
                        },
                    ],
                },
                {
                    label: '宁波',
                    value: '宁波',
                    children: [
                        {
                            label: '海曙区',
                            value: '海曙区',
                        },
                        {
                            label: '江北区',
                            value: '江北区',
                        },
                        {
                            label: '镇海区',
                            value: '镇海区',
                        },
                    ],
                },
                {
                    label: '湖州',
                    value: '湖州',
                    children: [
                        {
                            label: '吴兴区',
                            value: '吴兴区',
                            children: [
                                {
                                    label: '仁皇山街道',
                                    value: '仁皇山街道',
                                },
                                {
                                    label: '凤凰街道',
                                    value: '凤凰街道',
                                },
                            ]
                        },
                        {
                            label: '南浔区',
                            value: '南浔区',
                        },
                        {
                            label: '长兴县',
                            value: '长兴县',
                        },
                        {
                            label: '安吉县',
                            value: '安吉县',
                        },
                        {
                            label: '德清县',
                            value: '德清县',
                        },
                    ],
                },
            ],
        },
        {
            label: '安徽',
            value: '安徽',
            children: [
                {
                    label: '合肥',
                    value: '合肥',
                    children: [
                        {
                            label: '包河区',
                            value: '包河区',
                        },
                        {
                            label: '蜀山区',
                            value: '蜀山区',
                        },
                        {
                            label: '瑶海区',
                            value: '瑶海区',
                        },
                    ],
                },
                {
                    label: '芜湖',
                    value: '芜湖',
                    children: [
                        {
                            label: '镜湖区',
                            value: '镜湖区',
                        },
                        {
                            label: '弋江区',
                            value: '弋江区',
                        },
                        {
                            label: '湾沚区',
                            value: '湾沚区',
                        },
                    ],
                },
            ],
        },
        {
            label: '江苏',
            value: '江苏',
            children: [
                {
                    label: '南京',
                    value: '南京',
                    children: [
                        {
                            label: '玄武区',
                            value: '玄武区',
                        },
                        {
                            label: '秦淮区',
                            value: '秦淮区',
                        },
                        {
                            label: '建邺区',
                            value: '建邺区',
                        },
                    ],
                },
                {
                    label: '苏州',
                    value: '苏州',
                    children: [
                        {
                            label: '虎丘区',
                            value: '虎丘区',
                        },
                        {
                            label: '吴中区',
                            value: '吴中区',
                        },
                        {
                            label: '相城区',
                            value: '相城区',
                        },
                    ],
                },
            ],
        },
    ]
    return (
        <div className="main">
            <div className="header">
                信息采集
            </div>
            <div>
                <Steps current={0}>
                    <Step title='第一步' description='选择小区'/>
                    <Step title='第二步' description='选择楼幢'/>
                    <Step title='第三步' description='选择单元'/>
                    <Step title='第四步' description='选择屋室'/>
                    <Step title='第五步' description='查看资产'/>
                </Steps>
            </div>
            <div className="pickArea">
                <>
                    <div className="pickList">
                        <div style={{width: "20vw", fontSize: '1rem'}}>城市:</div>
                        <Input autoComplete='off' placeholder="请选择城市" onClick={() => {
                            setVisible(true)
                        }}/>
                    </div>

                    {/*<Button*/}
                    {/*    onClick={() => {*/}
                    {/*        setVisible(true)*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    选择*/}
                    {/*</Button>*/}
                    <Cascader
                        options={options}
                        visible={visible}
                        onClose={() => {
                            setVisible(false)
                        }}
                        value={value}
                        onConfirm={setValue}
                        onSelect={(val, extend) => {
                            console.log('onSelect', val, extend.items)
                        }}
                    >
                        {items => {
                            if (items.every(item => item === null)) {
                                return '未选择'
                            } else {
                                return items.map(item => item?.label ?? '未选择').join('-')
                            }
                        }}
                    </Cascader>
                </>
            </div>
        </div>
    )
        ;
};

export default Main;