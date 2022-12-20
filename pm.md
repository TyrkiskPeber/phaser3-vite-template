# PM Speldesign Leo
20-12-2022

## Syfte
Syftet med denna övning var att lära sig mer om phaser 3, javascript(js) och spel design. 

## Hur?
Jag har användt mig av 2 tutorials och sedan modifierat slutresultatet av den första av dem.
De tutorials som jag har använt är:
-   "Making Your First Phaser 3 Game in Modern Javascript - Part 1"[^1] skriven av Tommy Leung
-   "Pixel Art Techniques in Photoshop"[^2] Skriven av Zenva Schools

Jag började med att följa den första tutorialen. Jag läste och skrev av denna samt experimenterade lite för att försöka lära in hur koden kan tillämpas och användas. När jag var klar tog jag bort komponenter som jag dömde onödiga till min spel idé. Sedan använda jag Zenva Schools tutorial[^2] på pixel art för att unvika att hitta sprites med fair use som jag tyckte om. Jag såg igenom videon och applicerade teknikerna som visades för att skapa egna sprite sheets.

Med nyskapade sprite sheets var jag nu tvungen att lista ut hur Phaser 3 läser in sina sprites så att de inte blir klippta. Det tog inte lång tid att komma på hur jag skulle räkna för att få bra storlek på mina sprites. Uträkningen var Spritesheet längd / mängden sprites för att få välklippta bilder.

Jag fortsatte med att implementera rörelse logik för min fiende. Det var en simpel metod som heter :
```
moveToObject(x,y,v)
```
Där x är vad som ska flyttas, y är vart x ska flyttas och v är hur snabbt x ska flyttas till y i pixels per second.

Den får det valda objektet att röras mot det valda målet med en konstant hastighet.

## Det bra och det dåliga
I helhet är jag inte nöjd med det lilla jag hann skapa. Jag kunde ha spenderat mer tid eller alternativt prioriterat spel logik över grafik.
Det positiva är att det jag hann göra blev jag nöjd med. Alla sprites är värdefulla skapelser för mig och jag har plockat upp mer kunskap om Phaser 3, spel skapandets process samt teori om hur man ritar bra sprites.

## Utvärderingar på tutorials
Vi börjar med Phaser 3 spel guiden[^3]. Tutorialen förklarar vad den gör och backar sina steg med flera uttag från kod fältet. Den har även använt grå highlight i koden för att lättare visa var i koden det har skett ändringar. Den ger dig grunderna till ett komplett och omspelbart 2d spel. Den ger dig metoder för att flytta sprites, generera farliga saker, saker som ger dig poäng, gravitation, hur man för in sprites samt hur man skapar animationer. Jag skulle rekomendera den som en bra introduktion till Phaser 3.

Sedan har vi Zenvas guide till pixel art i Adobe Photoshop[^4]. Den ger bra metoder och tips på hur man ska tänka för att skapa bra och tydliga designer inom pixel art. Jag skulle starkt rekomendera den till alla som vill börja med pixel art i Photoshop.


[^1]: https://blog.ourcade.co/posts/2020/make-first-phaser-3-game-modern-javascript-part1/
[^2]: https://app1.zenva.com/course/pixel-art-techniques-in-photoshop/
[^3]: https://blog.ourcade.co/posts/2020/make-first-phaser-3-game-modern-javascript-part1/
[^4]: https://app1.zenva.com/course/pixel-art-techniques-in-photoshop/