'use client'
import * as React from 'react';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {ToolBar} from "~/components/table/toolBar";



export default function ReuseableTableBody({cols,rows}:{cols:GridColDef[],rows:GridRowsProp[]}) {

    console.log(rows)
    return (
        <div className={' w-full'}>
            <DataGrid
                className={'min-h-[20vh]'}
                slots={
                {

                    toolbar: ToolBar,

                }
            }   rows={rows} columns={cols}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}

                      getRowId={ (row) => {

                return row.Id;
            } } />
        </div>
    );
}
