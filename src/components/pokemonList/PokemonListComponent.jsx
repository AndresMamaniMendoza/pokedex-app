import React from "react";
import { DataGrid } from '@mui/x-data-grid';

function PokemonList({ pokemonList }) {
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 130 },
        { field: "type", headerName: "Type", width: 130 },
    ];

    const rows = pokemonList.store.map((p) => ({
        id: p.id,
        name: p.name,
        type: p.type,
    }));

    return (
        <div style={{ height: 400, width: "100%", marginBottom: "30px",marginTop: "30px" }}>
            <DataGrid rows={rows} columns={columns} pageSize={1} />
        </div>
    );
}

export default PokemonList;