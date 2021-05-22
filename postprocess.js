// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.10/mod.ts' 

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename
const json = await readJSON(filename)

// Step 2: Filter specific data we want to keep and write to a new JSON file
const solarInfo = Object.values(json); // convert property values into an array
solarInfo.shift()
const filteredSolarInfo = solarInfo

// Step 3. Write a new JSON file with our filtered data
const newFilename = `processed-solar.json` // name of a new file to be saved
await writeJSON(newFilename, filteredSolarInfo) // create a new JSON file
console.log("Wrote a post process file")

await removeFile('./solar.json') 