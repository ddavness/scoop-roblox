<h1><p align = center>RobloxDev Bucket for Scoop</p></h1>

`scoop bucket add rbxdev 'https://github.com/ddavness/scoop-RobloxDev.git'`

<h2><p align = center>Seriously. Don't waste your time configuring your PATH.</p></h2>

This bucket contains awesome applications made by the Roblox community targeted to Roblox development. All you need to do to get them is run a command, and no worries about setting up complicated stuff.

<details>
<summary>What's Scoop?</summary>

If you ever used Linux, Scoop will be familiar to you. Scoop is a CLI installer for Windows - and it can be used just like your local package manager: `apt/dpkg`, `dnf/yum`, `pacman`, etc.

It makes installing applications a whole level of degree easier. Instead of having to go through multiple installers, all you need to do is a couple commands.

Read more at https://scoop.sh.

</details>

## Applications in this bucket:

| Application | Description | Repository |
| ----------- | ----------- | ------ |
| `alpha-utils` | Helps fixing black edges on `.png` images before uploading to Roblox | [urraka/alpha-bleeding](https://github.com/urraka/alpha-bleeding) (source); [ddavness/alpha-utils](https://github.com/urraka/alpha-utils) (Windows binaries)
| `rojo` | Allows for code to be synchronized between Roblox Studio and an external filesystem (For example, a Git repo) - installs pre-release version (`0.5.x`) | [rojo-rbx/rojo](https://github.com/rojo-rbx/rojo) |
| `rojo04` | Installs Rojo `0.4.3` | [rojo-rbx/rojo](https://github.com/rojo-rbx/rojo) |
| `prepare-skybox` | Prepares skyboxes made with spacescape and exported with Unity settings to be uploaded for Roblox. | [ddavness/spacescape-roblox-converter](https://github.com/ddavness/spacescape-roblox-converter) |

## Notes:

- The license of this scoop bucket only applies to the bucket itself (the manifests) - the applications themselves have their own licenses.

- I suggest that you also add the `extras` bucket alongside this one. You can do so with the command `scoop bucket add extras`.