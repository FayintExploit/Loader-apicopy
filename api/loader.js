export default async function handler(req, res) {
    const url = "https://raw.githubusercontent.com/FayintExploit/Copyavatar.lua/refs/heads/main/Main.luau";

    try {
        const response = await fetch(url);
        const text = await response.text();

        res.setHeader("Content-Type", "text/plain");
        res.status(200).send(text);
    } catch (err) {
        res.status(500).send("Error loading script");
    }
}
