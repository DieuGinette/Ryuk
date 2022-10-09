from asyncio import events
from distutils.cmd import Command
import random
from turtle import title
import discord
from discord.ext import commands
intents = discord.Intents.all()


bot = commands.Bot(command_prefix = "!", intents = intents, description = "L'être humain est un être fascinant.")


@bot.event
async def on_ready():
    print("Ready !")

@bot.command()
async def ping(ctx):
    await ctx.send(f'Pong ! :ping_pong: {round (bot.latency * 1000)} ms')

@bot.command()
async def serverInfo(ctx):
    server = ctx.guild
    numberOfChannelText = len(server.text_channels)
    numberOfChannelVoice = len(server.voice_channels)
    serverDescription = server.description
    numberOfPerson = server.member_count
    serverName = server.name
    message = f"Le serveur **{serverName}** contient *{numberOfPerson}* personnes. \nLa description du serveur est : {serverDescription}. \nCe serveur possède {numberOfChannelVoice} channels vocaux et {numberOfChannelText} channel textuels."
    await ctx.send(message)

@bot.command()
async def say(ctx, *, text):
    message = ctx.message
    await message.delete()
    await ctx.send(f"{text}")


@bot.command()
async def chinese(ctx, *text):

	chineseChar = "丹书匚刀巳下呂廾工丿片乚爪冂口尸Q尺丂丁凵V山乂Y乙"
	chineseText = []
	for word in text:
		for char in word:
			if char.isalpha():
				index = ord(char.lower()) - ord("a")
				transformed = chineseChar[index]
				chineseText.append(transformed)
			else:
				chineseText.append(char)
		chineseText.append(" ")
	await ctx.send("".join(chineseText))


@bot.command()
@commands.has_permissions(manage_messages = True)
async def clear(ctx, nombre : int):
  await ctx.channel.purge(limit = nombre + 1)

@bot.command()
@commands.has_permissions(kick_members = True)
async def kick(ctx, user: discord.User, *reason):
    reason = " ".join(reason)
    await ctx.guild.kick(user, reason = reason)
    await ctx.send(f"L'utilisateur {user} à bien été kick du serveur pour la raison suivante : {reason}")


@bot.command()
@commands.has_permissions(ban_members = True)
async def ban(ctx, user : discord.User, *reason):
    reason = " ".join(reason)
    await ctx.guild.ban(user, reason = reason)
    await ctx.send(f"L'utilisateur {user} a été banni du serveur pour la raison suivante {reason}")

@bot.command()
@commands.has_permissions(ban_members = True)
async def unban(ctx, user, *reason):
    reason = " ".join(reason)
    userName, userID = user.split("#")
    bannedUsers = await ctx.guild.bans()
    for i in bannedUsers:
        if i.user.name == userName and i.user.discriminator == userID:
            await ctx.guild.unban(i.user, reason = reason)
            await ctx.send(f"L'utilisateur {user} à bien été débanni du serveur pour la raison suivante : {reason}")
            return
    await ctx.send(f"L'utilisateur {user} n'est pas banni")


@bot.event
async def on_message_edit(before, after):
    await before.channel.send(f"{before.author} à édité son message : \nAvant -> {before.content} \nAprès -> {after.content}")

@bot.event
async def on_member_join(member):
    await member.send("Salut. Moi c'est Ryuk le bot de DieuGinette. Je te souhaite la bienvenue sur le serveur")

@bot.event
async def on_member_remove(member):
    await member.send ("Salut. Je suis désolé de te voir partir du serveur :sob:")

bot.run("MTAxOTY0NzM2MjcwNjE5ODY2MA.GmfVts.VK2DuGr67PZFzjoXB_GvXdlSV_rmHq8X-XCovI")
