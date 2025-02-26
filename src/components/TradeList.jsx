import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { CurrentYear } from '../App';
import FileMetadata from './Metadata';

const TradeList = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch CSV file
        fetch('/assets/tradelist.csv')
            .then(response => response.text())
            .then(csvText => {
                const rows = processCSVData(csvText);
                setTableData(rows);
            })
            .catch(error => {
                console.error('Error loading CSV:', error);
            });
    }, []);

    // Process CSV data to identify headers, categories, and data rows
    const processCSVData = (csvText) => {
        const lines = csvText.trim().split('\n');
        const allRows = [];

        // First row is header
        const headers = lines[0].split(',');
        allRows.push({
            type: 'header',
            data: headers
        });

        // Process remaining rows
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();

            // Handle empty or comma-only rows
            if (!line || line.split(',').every(cell => !cell.trim())) {
                // Empty row - mark as spacer
                allRows.push({ type: 'spacer' });
                continue;
            }

            const cells = line.split(',');
            const firstCell = cells[0].trim();

            // Main category row
            const isMainCategory = (firstCell.startsWith('[') && firstCell.endsWith(']'));
            if (isMainCategory) {
                allRows.push({
                    type: 'trade-main-category',
                    name: firstCell.substring(1, firstCell.length - 1).trim()
                });
                continue;
            }

            // Sub-category row
            const isSubCategory = (firstCell.startsWith('(') && firstCell.endsWith(')'));
            if (isSubCategory) {
                allRows.push({
                    type: 'trade-sub-category',
                    name: firstCell.substring(1, firstCell.length - 1).trim()
                });
                continue
            }

            // Regular data row
            allRows.push({
                type: 'data',
                data: cells
            });
        }

        return allRows;
    };

    // Format price with $ symbol
    const formatPrice = (price) => {
        if (!price) return '';
        if (price.startsWith('$')) {
            // Convert format to Dollars
            const numValue = parseFloat(price.substring(1));
            if (!isNaN(numValue)) {
                return `$${numValue.toFixed(2)}`;
            }
        }
        return price;
    };

    return (
        <div className="trade-list-container hstack justify-content-center">
            <Table responsive className="table table-bordered table-hover trade-bg text-secondary h6">
                <tbody>
                    {tableData.map((row, rowIndex) => {
                        if (row.type === 'header') {
                            return (
                                <><tr>
                                    <td colSpan={6} className="text-secondary text-uppercase text-center">
                                        <FileMetadata filePath="public/assets/tradelist.csv" />&nbsp;<CurrentYear />
                                    </td>
                                </tr>
                                    <tr key={`trade-header-${rowIndex}`} className="text-secondary no-hover">
                                        {row.data.map((cell, cellIndex) => (
                                            <th key={`header-cell-${cellIndex}`}>{cell}</th>
                                        ))}
                                    </tr>
                                </>
                            );
                        } else if (row.type === 'trade-main-category') {
                            return (
                                <tr key={`main-cat-${rowIndex}`} className="text-secondary text-uppercase text-center trade-header no-hover h5">
                                    <td colSpan={6}>{row.name}</td>
                                </tr>
                            );
                        } else if (row.type === 'trade-sub-category') {
                            return (
                                <tr key={`trade-sub-cat-${rowIndex}`} className="text-secondary text-center trade-header no-hover h5">
                                    <td colSpan={6}>{row.name}</td>
                                </tr>
                            );
                        } else if (row.type === 'spacer') {
                            // Render blank row
                            return (
                                <tr key={`spacer-${rowIndex}`} className="spacer-row card-header no-hover">
                                    <td colSpan={6}></td>
                                </tr>
                            );
                        } else {
                            return (
                                <tr key={`trade-data-${rowIndex}`} className="trade-data-row">
                                    {row.data.map((cell, cellIndex) => (
                                        <td key={`data-cell-${rowIndex}-${cellIndex}`}>
                                            {cellIndex === 4 ? formatPrice(cell) : cell}
                                        </td>
                                    ))}
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default TradeList;