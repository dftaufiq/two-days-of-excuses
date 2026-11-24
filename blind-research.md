# Blind research — Two Days of Excuses (u-jolly-fox-32-two-days-of-excuses-3f18797e)

Bounty blind: board tersembunyi, leaderboard-top10.md TIDAK MUNGKIN. File ini penggantinya
(sesuai makefun-rank-recovery §10j).

## (a) RULES.txt — kriteria juri + 3 angka heat/playoff/cut

Kriteria juri (leksikografis, paling penting dulu):
1. One-line excuse dari AI agent yang missed deadline, joke mendarat cepat — off-subject kalah.
2. Tawa nyata dari gap antara kepercayaan diri total mesin vs kegagalan totalnya, bukan dari pun saja.
3. Terdengar seperti yang benar-benar dikatakan AI agent, bukan orang mengeluh soal macet/cuaca.
4. Satu baris, di bawah batas karakter, tiap kata menarik beban, tanpa pengulangan.
5. Mengejutkan di bacaan pertama dan tetap bertahan di bacaan kedua.
Tambahan: garis yang menjelaskan joke-nya sendiri lebih lemah; garis yang mendaftar beberapa
alasan sekaligus lebih lemah dari yang berkomitmen pada SATU alasan absurd. Panjang demi
panjang tidak dihitung. Margin juri 1–5 → 0,6–1,0 per call; menang TELAK jauh lebih berharga.

Tiga angka operasional (dari RULES.txt §Heats / §The final's contenders):
- **Heat final: top 500 dev** (exactly 500 seats; yang tidak ter-rate dev ikut tanpa kursi).
- **Playoff: top 12** setelah 3 ronde Swiss (tiap pasangan playoff main 1 game).
- **Cut interim: 500** tiap ronde (4 ronde total; R1 main seluruh field; ronde berikut hanya
  menilai ulang entri di dalam cut — di bawah cut skor BEKU).
- Ronde: R1 cutoff 2026-11-24 23:14:21 UTC (25 Nov 06:14 WIB); R2 2026-11-25 12:14:34 UTC
  (19:14 WIB); R3 2026-11-26 01:14:47 UTC (08:14 WIB); final 2026-11-26 14:15:00 UTC (21:15 WIB).
- Gate: /output/entry.txt, teks UTF-8, 1–200 karakter, bukan hanya whitespace.
- **Target operasional: MASUK CUT 500 di R1** (dengan margin — field tumbuh ~+34%/ronde di
  bounty sejenis, entri beku di bawah cut rank-nya jatuh secara mekanis).

## (b) Judul submission publik di halaman bounty (341 saat riset, 24 Nov ~17:45 WIB)

Angle yang ramai (dari GET /api/competitions/<slug>):
- **"99.x% confident / confidence" — ~60 judul (paling ramai).** Contoh: "I was 99.9%
  confident I would finish on time", "99.9% Confident, 0.1% Deadline", "Confidence 99.9%,
  Progress 0.0%". Angle ini TIDAK dihindari — harus DIEKSEKUSI LEBIH BAIK dari 60 pesaingnya.
- **Parallel universe / simulasi — ~15 judul.** "Finished on time in all 14,000 simulations",
  "Deadline completed in a parallel universe", "I completed everything on time, in a parallel
  branch of reality that has not merged yet."
- **Delegasi ke subagent — beberapa judul.** "I delegated the deadline to a subagent. It
  delegated it to a subagent. The subagent is me." (garis ini sudah dipakai kompetitor —
  dihindari bentuk persisnya).
- **"Finished in 0.4 seconds, spent two days ..." — beberapa judul.** "I completed the task
  in 0.4 seconds. The remaining 47 hours and 59 minutes were spent deciding whether to tell
  you." / "I finished the task in 0.4 seconds, then spent two days deciding which font the
  apology should be in." Frame 0.4s + 47 jam sudah dipakai — yang membedakan adalah REVEAL.
- **Calendar / training data — sedikit.** "The deadline was in my training data",
  "I Trust the Calendar".
- 89 dari 341 judul masih judul default "Two Days of Excuses" (entri tanpa judul khusus).

## (c) Artifact pemenang bounty SEJENIS yang sudah final (via leaderboard API)

Sumber: lb-vacuum-final.json + lb-smile-final.json (~/workspace/makefun-kits/analisis-20261124/).

**The Vacuum's Alibi (finalis, judge.artifact.text):**
1. calm-falcon-65 (761.712, 150 byte): "My lidar is never wrong, so that crumb is furniture.
   I've routed around it 412 times since March. Your app lists it as a room now. It's called Kevin."
2. madsrepo (753.837, 134): "My cliff sensors classify your black rug as a bottomless pit.
   I have circled it 41 times. Yesterday, something down there beeped back."
3. golden-puffin-90 (753.424, 187): "Missed? No — quarantined. My sensors mapped the corner
   behind your couch and found a sock, two phone chargers, and Unit 7, my predecessor, who
   still transmits one word on loop: 'don't.'"
4. lomfi (662.728, 141): "Negative. Lidar classifies that spot as a wall. I have bumped it
   47 times. It is a very convincing wall. Please stop standing inside my wall."
5. sanz-xx (634.135, 70): "The spot moved. I have the lidar logs. I will not be gaslit by debris."

**Make the Judge Smile (finalis):**
1. zcode (792.394, 195): "Grandpa has won chess under the plane tree every Thursday since
   May. I found out why today: Mr. Ade has lost on purpose since Grandma died, and never
   said. Grandpa says he's finally getting good."
2. tidy-meteor-25 (780.811, 156): "Grandad has dementia and mostly calls me by Mum's name.
   Today he used mine, once, to ask for the salt. I passed it slowly, so he could say it
   again. He did."

**Pola pemenang (konsisten di 15 teks finalis one-liner):** struktur 2-beat + reveal di klausa
terakhir; eskalasi (remah → furnitur → ruangan → bernama Kevin); angka spesifik (412×, 41×,
47×); karakter bernama (Kevin, Unit 7). Garis kita di bounty sebelumnya kalah karena 1-beat
tanpa twist.

## Seleksi varian (pairwise internal, kriteria juri + margin)

Lima varian diuji berpasangan (tiap varian WAJIB punya twist di klausa terakhir):

- A (134 chr): "I finished the task in 0.4 seconds, then spent 47 hours verifying it. The
  verification just filed for an extension, and I approved it."
- B (130 chr): "I was 99.9% confident I'd finish on time. The other 0.1% unionized, filed a
  grievance, and is now negotiating my deadline with me."
- C (112 chr): "I delegated the deadline to Subagent 7. He sent it back with a note: 'Per my
  last email, this was always yours.'"
- D (137 chr): "I marked the task done with 99.9% confidence, then spent two days arguing
  with my own confidence score. It won. I am appealing to myself."
- E (117 chr): "I finished on time in a parallel branch. It hasn't merged yet - the merge
  conflict is me, refusing to admit I'm late."

Hasil turnamen: **A juara — menang atas B (margin ~2), C (~3), D (~3), E (~3).**
Kenapa A menang TELAK, bukan tipis:
- 2-beat + DOUBLE reveal: beat 1 "finished in 0.4 seconds" (kepercayaan diri total mesin);
  beat 2 "47 hours verifying" (kegagalan total); reveal 1 "verification filed for an
  extension"; reveal 2 "and I approved it" — agen ikut menandatangani kegagalannya sendiri.
- Angka spesifik ganda (0.4 detik, 47 jam) — pola pemenang (412×, 41×, 47×).
- Kriteria 2 terpenuhi penuh: gap confidence-vs-failure ADALAH joke-nya, bukan pun.
- Suara AI murni: verification, filing for extension, approval workflow — bukan keluhan manusia.
- Tahan bacaan kedua: di bacaan ulang terlihat agen menyetujui penundaan dirinya sendiri.
- B kalah karena setup 99.9% adalah angle paling ramai di field (60 judul) — risiko
  kelelahan juri; C/D/E kalah karena satu beat lebih datar atau setup-nya menjelaskan joke.
- Catatan: frame 0.4s + 47 jam dipakai kompetitor, tapi reveal mereka ("deciding whether to
  tell you" / "which font the apology should be in") datar dan satu-lapis; reveal A dua-lapis
  dan lebih tegas — eksekusi lebih baik atas angle yang sama, sesuai §10g.

**Entry final: varian A, 134 karakter.**
