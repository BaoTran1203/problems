import {expect} from 'chai';
import 'mocha';
import {Matrix2D} from "./matrix2D";

describe('Rotate matrix', () => {
    it('Rotate once', () => {
        let k: number = 1;
        let input: number[][] = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];

        let expected = [
            [0, 8, 0],
            [0, 128, 16],
            [0, 32, 255]
        ];

        let matrix = new Matrix2D(input);
        matrix.rotate(k);
        expect(matrix.matrix).to.eql(expected);
    });

    it('Rotate twice', async () => {
        let k: number = 2;
        let input: number[][] = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];

        let expected = [
            [0, 0, 0],
            [32, 128, 8],
            [255, 16, 0]
        ];

        let matrix = new Matrix2D(input);
        matrix.rotate(k);
        expect(matrix.matrix).to.eql(expected);
    });

    it('Rotate 3 times', async () => {
        let k: number = 3;
        let input: number[][] = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];

        let expected = [
            [255, 32, 0],
            [16, 128, 0],
            [0, 8, 0]
        ];

        let matrix = new Matrix2D(input);
        matrix.rotate(k);
        expect(matrix.matrix).to.eql(expected);
    });

    it('Rotate 4 times', async () => {
        let k: number = 4;
        let input: number[][] = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];

        let expected = [
            [0, 16, 255],
            [8, 128, 32],
            [0, 0, 0]
        ];

        let matrix = new Matrix2D(input);
        matrix.rotate(k);
        expect(matrix.matrix).to.eql(expected);
    });
});
