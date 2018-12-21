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
			linkName,
			scroll,
			onClick,
			onReset,
			rowSelection
        } = this.props;
        
		return(
			<Card bordered='false'>

                {
                    onSubmit && items ? <Search items={items} loading={loading} onSubmit={onSubmit} onReset={onReset}/> :
                    <Fragment/>
                }

                {
                    link || onClick ? <Buttons style={onSubmit ? styles.newBtn : ''}
                    type="primary"
                    onClick={onClick}
                    name={linkName ? linkName : "+ 新建"}
                    link={link}/> : <Fragment/>
                }

                <Table loading={loading}
                    columns={columns}
                    dataSource={dataSource}
                    size="middle"
                    className={styles.businessTable}
                    rowSelection={rowSelection ? rowSelection : null}
                    scroll={{x: scroll ? scroll : 800}}
                    pagination={false}
                />

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