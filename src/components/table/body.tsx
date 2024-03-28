'use client'
import * as React from 'react';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {ToolBar} from "~/components/table/toolBar";



export default function ReuseableTableBody({cols,rows}:{cols:GridColDef[],rows:GridRowsProp[]}) {

    console.log(rows)
    return (
        <div className={'h-fit w-full'}>
            <DataGrid slots={
                {

                    toolbar: ToolBar,

                }
            }  autoHeight={false} rows={rows} columns={cols} getRowId={ (row) => {

                return row.Id;
            } } />
        </div>
    );
}
