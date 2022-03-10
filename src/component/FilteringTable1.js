import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import MOCK_DATA1 from './MOCK_DATA1.json'
import { Columnb } from './columnb'
import './table.css'
import Nav from './Nav'
import GlobalFilter from './GlobalFilter'
const FilteringTable1 = () => {

    const columns = useMemo(() => Columnb, [])
    const data = useMemo(() => MOCK_DATA1, [])

    const tableInstance = useTable({
        columns,
        data,
    }, useGlobalFilter)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <Nav />
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {
                                                column.render('Header')
                                            }
                                        </th>
                                    ))
                                }

                            </tr>
                        ))
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        })
                                    }

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    );
}

export default FilteringTable1