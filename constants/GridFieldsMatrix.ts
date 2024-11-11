class GridField {
  color: string;
  name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
}

// lihi stolpci so premaknjeni navzdol da pasejo zraven sodih

export const GridPointsMatrix = [                          
  [null, null, null, new GridField('b', 'D15'), new GridField('w', 'E14'), null, null, null, null, null, new GridField('w', 'K11'), null, null, null, null],
  [null, null, null, new GridField('g', 'D14'), new GridField('b', 'E13'), new GridField('g', 'F13'), new GridField('b', 'G12'), null, new GridField('b', 'I11'), new GridField('g', 'J11'), new GridField('b', 'K10'), null, null, null, null],
  [null, null, null, new GridField('w', 'D13'), new GridField('g', 'E12'), new GridField('w', 'F12'), new GridField('g', 'G11'), new GridField('w', 'H11'), new GridField('g', 'I10'), new GridField('w', 'J10'), new GridField('g', 'K9'), null, null, null, null],
  [null, null, null, new GridField('b', 'D12'), new GridField('w', 'E11'), new GridField('b', 'F11'), new GridField('w', 'G10'), new GridField('b', 'H10'), new GridField('w', 'I9'), new GridField('b', 'J9'), new GridField('w', 'K8'), null, null, null, null],
  [null, null, new GridField('b', 'C11'), new GridField('g', 'D11'), new GridField('b', 'E10'), new GridField('g', 'F10'), new GridField('b', 'G9'), new GridField('g', 'H9'), new GridField('b', 'I8'), new GridField('g', 'J8'), new GridField('b', 'K7'), new GridField('g', 'L7'), new GridField('b', 'M6'), null, null],
  [new GridField('g', 'A11'), new GridField('w', 'B11'), new GridField('g', 'C10'), new GridField('w', 'D10'), new GridField('g', 'E9'), new GridField('w', 'F9'), new GridField('g', 'G8'), new GridField('w', 'H8'), new GridField('g', 'I7'), new GridField('w', 'J7'), new GridField('g', 'K6'), new GridField('w', 'L6'), new GridField('g', 'M5'), new GridField('w', 'N5'), new GridField('g', 'O4')],
  [null, new GridField('b', 'B10'), new GridField('w', 'C9'), new GridField('b', 'D9'), new GridField('w', 'E8'), new GridField('b', 'F8'), new GridField('w', 'G7'), new GridField('b', 'H7'), new GridField('w', 'I6'), new GridField('b', 'J6'), new GridField('w', 'K5'), new GridField('b', 'L5'), new GridField('w', 'M4'), new GridField('b', 'N4'), null],
  [null, null, null, new GridField('g', 'D8'), new GridField('b', 'E7'), new GridField('g', 'F7'), new GridField('b', 'G6'), new GridField('g', 'H6'), new GridField('b', 'I5'), new GridField('g', 'J5'), new GridField('b', 'K4'), new GridField('g', 'L4'), null, null, null],
  [null, null, null, new GridField('w', 'D7'), new GridField('g', 'E6'), new GridField('w', 'F6'), new GridField('g', 'G5'), new GridField('w', 'H5'), new GridField('g', 'I4'), new GridField('w', 'J4'), new GridField('g', 'K3'), null, null, null, null],
  [null, null, null, new GridField('b', 'D6'), new GridField('w', 'E5'), new GridField('b', 'F5'), new GridField('w', 'G4'), new GridField('b', 'H4'), new GridField('w', 'I3'), new GridField('b', 'J3'), new GridField('w', 'K2'), null, null, null, null],
  [null, null, null, new GridField('g', 'D5'), new GridField('b', 'E4'), new GridField('g', 'F4'), null, null, null, new GridField('g', 'J2'), new GridField('b', 'K1'), null, null, null, null],
  [null, null, null, new GridField('w', 'D4'), null, null, null, null, null, null, null, null, null, null, null],
];

export const GridColorsMatrix = [
  [null, null, null, 'b', 'w', null, null, null, null, null, 'w', null, null, null, null],
  [null, null, null, 'g', 'b', 'g', 'b', null, 'b', 'g', 'b', null, null, null, null],
  [null, null, null, 'w', 'g', 'w', 'g', 'w', 'g', 'w', 'g', null, null, null, null],
  [null, null, null, 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', null, null, null, null],
  [null, null, 'b', 'g', 'b', 'g', 'b', 'g', 'b', 'g', 'b', 'g', 'b', null, null],
  ['g', 'w', 'g', 'w', 'g', 'w', 'g', 'w', 'g', 'w', 'g', 'w', 'g', 'w', 'g'],
  [null, 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', null],
  [null, null, null, 'g', 'b', 'g', 'b', 'g', 'b', 'g', 'b', 'g', null, null, null],
  [null, null, null, 'w', 'g', 'w', 'g', 'w', 'g', 'w', 'g', null, null, null, null],
  [null, null, null, 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', null, null, null, null],
  [null, null, null, 'g', 'b', 'g', null, null, null, 'g', 'b', null, null, null, null],
  [null, null, null, 'w', null, null, null, null, null, null, null, null, null, null, null]
];

export const DefaultPositionMatrix = [
  [null, null, null, 'bR', 'bP', null, null, null, null, null, 'gR', null, null, null, null],
  [null, null, null, 'bN', 'bP', null, null, null, null, 'gP', 'gN', null, null, null, null],
  [null, null, null, 'bB', 'bP', null, null, null, null, 'gP', 'gB', null, null, null, null],
  [null, null, null, 'bQ', 'bP', null, null, null, null, 'gP', 'gK', null, null, null, null],
  [null, null, 'bB', 'bK', 'bP', null, null, null, null, 'gP', 'gP', 'gQ', 'gB', null, null],
  ['bR', 'bN', 'bP', 'bP', null, null, null, null, null, null, null, 'gP', 'gP', 'gN', 'gR'],
  [null, 'bP', null, null, null, null, null, null, null, null, null, null, null, 'gP', null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 'wP', 'wP', 'wP', null, null, null, null, null, null],
  [null, null, null, null, 'wP', 'wP', 'wQ', 'wK', 'wB', 'wP', 'wP', null, null, null, null],
  [null, null, null, 'wP', 'wN', 'wB', null, null, null, 'wN', 'wR', null, null, null, null],
  [null, null, null, 'wR', null, null, null, null, null, null, null, null, null, null, null],
];