const fs = require("fs")
const path = require("path")

const content = {
    "schemaVersion": 1,
    "label": "Applications",
    "color": "00A1FF"
}

fs.readdir(path.join(__dirname, "./../bucket"), {"withFileTypes": true}, (err, ret) => {
    if (err) {
        throw err
    }

    var count = 0
    var failed = 0
    ret.forEach(file => {
        var ext = (file.name).split(".")
        if (file.isFile() && ext[ext.length - 1] === "json" /* Make sure it's a JSON file. */) {
            console.log(`✔️  Scanned manifest \x1b[36m${file.name}\x1b[0m.`)
            count++
        } else {
            console.log(`❌  Detected foreign directory entity \x1b[35m${file.name}\x1b[0m.`)
            failed++
        }
    });

    console.log(`\n✔️  Manifests Counted: ${count}\n❌  Foreign Objects Counted: ${failed}`)

    content["message"] = count.toString()
    fs.writeSync(fs.openSync(".appcountbadge.json", "w"), JSON.stringify(content) + "\n")

    console.log("Done.")
    process.exit()
})
