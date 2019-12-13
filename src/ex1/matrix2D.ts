export interface iMatrix2D {
    rotateLeft(): number[][];

    rotateRight(): number[][];

    rotate(times: number, clockwise: boolean): number[][]
}

export class Matrix2D implements iMatrix2D {

    private _matrix: number[][] = [];
    private readonly length: number = 0;

    constructor(_matrix: number[][]) {
        this._matrix = _matrix;
        this.length = _matrix.length;
    };

    get matrix(): number[][] {
        return this._matrix;
    }

    set matrix(_matrix: number[][]) {
        this._matrix = _matrix;
    }

    /**
     * Rotate the matrix to the left (counterclockwise)
     * - Time complexity: O(n^2)
     * - Memory complexity: O(1)
     */
    rotateLeft(): number[][] {
        for (let i = 0; i < this.length / 2; i++) {
            for (let j = i; j < this.length - i - 1; j++) {
                let xPos = this.length - 1 - i;
                let yPos = this.length - 1 - j;

                let temp = this._matrix[i][j];
                this._matrix[i][j] = this._matrix[j][xPos];
                this._matrix[j][xPos] = this._matrix[xPos][yPos];
                this._matrix[xPos][yPos] = this._matrix[yPos][i];
                this._matrix[yPos][i] = temp;
            }
        }

        return this._matrix;
    }

    /**
     * Rotate the matrix to the right (clockwise)
     */
    rotateRight(): number[][] {
        for (let i = 0; i < this.length / 2; i++) {
            for (let j = i; j < this.length - i - 1; j++) {
                let xPos = this.length - 1 - i;
                let yPos = this.length - 1 - j;

                let temp = this._matrix[i][j];
                this._matrix[i][j] = this._matrix[yPos][i];
                this._matrix[yPos][i] = this._matrix[xPos][yPos];
                this._matrix[xPos][yPos] = this._matrix[j][xPos];
                this._matrix[j][xPos] = temp;
            }
        }

        return this._matrix;
    }

    /**
     * Rotate the matrix (n) times with the specified rotation direction (clockwise or counterclockwise)
     * - Matrix can rotate up to 3 times. When turned to the 4th time, it will return to its original shape.
     * - So when the number of turns is greater than 4 times, we can shorten the number of turns by dividing the remainder by 4
     * - Time complexity: O(n^2)
     * - Memory complexity: O(1)
     * @param times
     * @param clockwise
     */
    rotate(times: number, clockwise: boolean = true): number[][] {
        let loop: number = times % 4;
        if (loop <= 0) {
            return this._matrix;
        }

        for (let i = 0; i < loop; i++) {
            clockwise ? this.rotateRight() : this.rotateLeft();
        }

        return this._matrix;
    }

    /**
     * Print matrix to log console
     */
    print() {
        for (let i = 0; i < this.length; i++) {
            console.log(this._matrix[i]);
        }
    }
}
