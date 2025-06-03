# Instrucțiuni de Instalare și Configurare

## 1. Activare PowerShell Scripts
Pentru a putea rula comenzile npm, trebuie să activați executarea scripturilor în PowerShell. Deschideți PowerShell ca Administrator și rulați:

```powershell
Set-ExecutionPolicy RemoteSigned
```

## 2. Instalare Dependențe
După activarea scripturilor, instalați dependențele necesare:

```bash
npm install class-variance-authority clsx tailwind-merge @types/react @types/react-dom @types/node
```

## 3. Verificare Fișiere
Asigurați-vă că toate fișierele sunt prezente și au conținutul corect:

- `/app/globals.css`
- `/hooks/useScrollAnimation.ts`
- `/components/ui/unified-button.tsx`
- `/components/ui/modern-card.tsx`
- `/components/ui/animated-section.tsx`
- `/lib/utils.ts`

## 4. Configurare tsconfig.json
Asigurați-vă că aveți următoarele paths în tsconfig.json:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 5. Verificare Build
După instalarea dependențelor și configurare, rulați:

```bash
npm run build
```

## Notă
Dacă întâmpinați probleme cu permisiunile PowerShell, puteți rula și comanda:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
```

Aceasta va permite executarea comenzilor npm doar pentru sesiunea curentă. 