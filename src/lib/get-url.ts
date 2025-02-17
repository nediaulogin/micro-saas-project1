export default function getUrl(path?: string) {
    const url = process.env.NEXT_PUBLIC_URL || ''
    const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path ||''
    return `${url}${normalizedPath}`
}