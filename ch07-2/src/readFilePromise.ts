import { readFile } from 'fs';

export const readFilePromise = (filename: string): Promise<string> => {
  return new Promise<string>((
    resolove: (value: string) => void,
    reject: (error: Error) => void) => {
    readFile(filename, (err: Error, buffer: Buffer) => {
      if (err) {
        reject(err)
      } else {
        resolove(buffer.toString())
      }
    })
  }
  )
}