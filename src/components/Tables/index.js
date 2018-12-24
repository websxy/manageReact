import React, { Component, Fragment } from 'react';
import { Card, Table, Row, Pagination } from 'antd';
import Search from '../Search/index';
import Buttons from '../Buttons/index';
import styles from './index.less';
class Tables extends Component {
      
    constructor(props) {
        super(props);
    }

	render() {
		const {
			loading,
			dataSource,
			link,
			items,
			current,
			total,
			columns,
			onSubmit,
			pagination,
			bordered,
			btns,
			scroll,
			onReset,
			rowSelection
        } = this.props;
        
		return(
			<Card bordered={bordered}>

                {/* 搜索组件 */}
                {
                    onSubmit && items ? <Search items={items} loading={loading} onSubmit={onSubmit} onReset={onReset}/> :
                    <Fragment/>
                }

                 {/* 按钮组件 */}
                {
                   btns ? <Buttons btns={btns}/> : <Fragment/>
                }

                {/* 表格组件 */}
                <Table loading={loading}
                    columns={columns}
                    dataSource={dataSource}
                    size="middle"
                    className={styles.businessTable}
                    rowSelection={rowSelection ? rowSelection : null}
                    scroll={{x: scroll ? scroll : 800}}
                    pagination={false}
                />

                 {/* 分页组件 */}
                {
                    current ? <Row type="flex" justify="end" className={styles.paginationBox}>
                        <Pagination showQuickJumper onChange={pagination} current={current} total={total}/>
                    </Row> : <Fragment/>
                }
            </Card>
		)
	}
}
export default Tables