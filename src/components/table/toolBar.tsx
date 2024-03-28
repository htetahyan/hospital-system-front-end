import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector, GridToolbarExport,
    GridToolbarFilterButton
} from "@mui/x-data-grid";
import {Box} from "@mui/material";

export const ToolBar = () => {
    return(
        <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector
                slotProps={{ tooltip: { title: 'Change density' } }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <GridToolbarExport
                slotProps={{
                    tooltip: { title: 'Export data' },
                    button: { variant: 'outlined' },
                }}
            />
        </GridToolbarContainer>
    )
}
