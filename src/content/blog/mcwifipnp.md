---
title: "LAN World Plug-n-Play"
description: "更高级联机设置"
pubDate: "2024/8/2 12:00"
image: "/home.jpg"
categories:
  - 技术
tags:
  - Makrdown
---

<style>
td, th {
   border: none!important;
}
</style>
<div align="center">

|   <!-- -->   |   <!-- -->   |   <!-- -->   |   <!-- -->   |
|:------------:|:------------:|:------------:|:------------:|
| [![1][1]][2] | [![3][3]][4] | [![5][5]][6] | [![7][7]][8] |



</div>

[1]: https://img.shields.io/modrinth/dt/RTWpcTBp?label=Modrinth%0aDownloads&logo=modrinth&style=flat&color=45A35F&labelcolor=2D2D2D
[2]: https://modrinth.com/mod/mcwifipnp

[3]: https://img.shields.io/curseforge/dt/450250?label=CurseForge%0aDownloads&logo=curseforge&style=flat&color=E36639&labelcolor=2D2D2D
[4]: https://www.curseforge.com/minecraft/mc-mods/mcwifipnp

[5]: https://img.shields.io/badge/Available%20for-%201.15%20to%201.21-47376F?logo=files&color=377BCB&labelcolor=2D2D2D
[6]: https://modrinth.com/mod/mcwifipnp/versions

[7]: https://img.shields.io/github/license/Satxm/mcwifipnp?label=License&logo=github&style=flat&color=E51050&labelcolor=2D2D2D
[8]: https://github.com/satxm/mcwifipnp


## 简介


使用Minecraft原生界面样式，使用Mojang官方混淆表。

修改自[TheGlitch76/mcpnp](https://github.com/TheGlitch76/mcpnp)项目，UPnP模块来自[adolfintel/WaifUPnP](https://github.com/adolfintel/WaifUPnP)。

## 界面截图

<div align="center">

![GUI EN-US](https://cdn.modrinth.com/data/cached_images/2164ab49281a8e6125ef9df5e064069756507cca.jpeg)

![GUI ZH-CN](https://cdn.modrinth.com/data/cached_images/4a15fdeac48b21b07a0850138b5c447c401042b5.jpeg)

</div>

## 它的作用

Allows you to change the port number of the LAN world and choose whether to map this port to the public network using UPnP (if your router supports UPnP).

允许你修改局域网世界的端口号，并选择是否映射这个端口使用UPnP映射到公网（如果你的路由器支持UPnP）。

Automatically select game mode according to your game, allows you to enable or disable pvp.

根据你的游戏，自动选择游戏模式，允许你启用或禁用PVP。

Allows you to change server motd (Which is the message that is displayed in the server list of the client, below the name).

允许你自定义MOTD（是玩家客户端的多人游戏服务器列表中显示的服务器信息，显示于名称下方）。

Allows you control other players' op permissions when they join your world, and you can use ```/op``` ```/deop``` commands to do that.

你可以控制其他玩家加入时是否有op权限、是否可以作弊，你也可以使用```/op``` ```/deop```命令进行控制。


You can control haw many players can join your world. You can use whitelist to block other players join your world.

你可以决定有多少玩家可以加入你的世界，你可以使用白名单来组建其他玩家进加入你的游戏世界。

Allows players to connect your world from anywhere, this includes toggling online mode.

允需其他玩家从任何地方连接你的世界，并且你可以选择是否启用正版验证。

Your settings will be recorded in a file, and it will be automatically loaded next time.

可以自动保存配置文件，并且下次加载世界时会自动载入配置。

You can choose whether to copy the IP address (such as local IPv4, globe IPv4 IPv6) to the clipboard.

可以获取你本机的IP地址（本地IPv4，公网IPv4、IPv6[1.4.8+]），方便联机使用，你可以选择是否复制IP到剪切板。
