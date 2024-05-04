import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import PageLayout from "../components/PageLayout";

interface Object1Type {
  id: number;
  name: string;
  children?: Object1Type[];
}

interface Object2Type {
  id: number;
  name: string;
  msf: string[];
}

const Test: React.FC = () => {
  const [checkedState, setCheckedState] = useState<
    { msfId: number; batchName: string }[]
  >([]);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    msfId: number,
    batchName: string
  ) => {
    const { checked } = e.target;

    const currentIndex = checkedState.findIndex(
      (item) => item.msfId === msfId && item.batchName === batchName
    );

    if (currentIndex !== -1) {
      const updatedState = checked
        ? [
            ...checkedState.slice(0, currentIndex),
            ...object2
              .filter((_batch, index) => index > currentIndex)
              .map((batch) => ({
                msfId,
                batchName: batch.name,
              })),
          ]
        : checkedState.slice(0, currentIndex);

      setCheckedState(updatedState);
    } else if (checked) {
      const currentBatchIndex = object2.findIndex(
        (batch) => batch.name === batchName
      );

      if (currentBatchIndex !== -1) {
        const newItems = object2
          .filter((_batch, index) => index >= currentBatchIndex)
          .map((batch) => ({
            msfId,
            batchName: batch.name,
          }));

        setCheckedState([...checkedState, ...newItems]);
      }
    }
  };

  const handleRowExpand = (msfId: number) => {
    const isExpanded = expandedRows.includes(msfId);
    const updatedExpandedRows = isExpanded
      ? expandedRows.filter((row) => row !== msfId)
      : [...expandedRows, msfId];
    setExpandedRows(updatedExpandedRows);
  };

  return (
    <PageLayout>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Object</TableCell>
              {object2.map((batch) => (
                <TableCell key={batch.id}>{batch.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {object1.map((msf) => (
              <React.Fragment key={msf.id}>
                <TableRow>
                  <TableCell>
                    {msf.children && (
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleRowExpand(msf.id)}
                      >
                        {expandedRows.includes(msf.id) ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell>{msf.name}</TableCell>
                  {object2.map((batch) => (
                    <TableCell key={batch.id}>
                      <Checkbox
                        onChange={(e) => handleChange(e, msf.id, batch.name)}
                        checked={checkedState.some(
                          (item) =>
                            item.msfId === msf.id &&
                            item.batchName === batch.name
                        )}
                      />
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={object2.length + 2}
                  >
                    <Collapse
                      in={expandedRows.includes(msf.id)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Table>
                        <TableBody>
                          {object1.map((child) => (
                            <TableRow key={child.id}>
                              <TableCell />
                              <TableCell>{child.name}</TableCell>
                              {object2.map((batch) => (
                                <TableCell key={batch.id}>
                                  <Checkbox
                                    value={`${batch.id}__${child.name}`}
                                    onChange={(e) =>
                                      handleChange(e, child.id, batch.name)
                                    }
                                  />
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </PageLayout>
  );
};

const object1: Object1Type[] = [
  {
    id: 1,
    name: "test1",
    children: [{ id: 1, name: "test1 bis" }],
  },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
  { id: 4, name: "test4" },
];

const object2: Object2Type[] = [
  {
    id: 1,
    name: "prop 1",
    msf: ["1__test1", "2__test2"],
  },
  {
    id: 2,
    name: "prop 2",
    msf: ["1__test1", "4__test4"],
  },
  {
    id: 3,
    name: "prop 3",
    msf: ["2__test2"],
  },
];

export default Test;
