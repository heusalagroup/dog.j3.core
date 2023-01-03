import { J3Coordinate } from "./J3Coordinate";
import { J3Cell } from "./J3Cell";
import { J3Grid } from "./J3Grid";

export class J3GridUtils {

    public static replaceCell (
        grid: J3Grid,
        coordinate: J3Coordinate,
        newCell: J3Cell
    ) : J3Grid {
        const layers = grid.layers.map((layer) => {
            if (layer.coordinate.z !== coordinate.z) {
                return layer;
            }

            const rows = layer.rows.map((row) => {
                if (row.coordinate.y !== coordinate.y) {
                    return row;
                }

                const cells = row.cells.map((cell) => {
                    if (cell.coordinate.x !== coordinate.x) {
                        return cell;
                    }

                    return newCell;
                });

                return { ...row, cells };
            });

            return { ...layer, rows };
        });

        return { ...grid, layers };
    }

}
