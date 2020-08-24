import tar from "tar"
import moment from "moment"
import path from "path"

// vars to backup and destination for backup
let backupDirs = ["/home/spacey/Documents"]
// files to ignore (hidden files)
let ignore = ["node_modules", ".*"]
let backupDest = "/home/spacey/Desktop/Backups"
// string to append to the name of our backed up files
let timestamp = moment().format("MM-DD-YY.h:mm a")

// create backup
tar.c({ file: `${backupDest}/${timestamp}.tar.gz` }, backupDirs).then(() => {
  console.log(`Created backup at: ${backupDest}/${timestamp}.tar.gz`)
})
