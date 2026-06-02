import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/theme.css';
import { SettingsProvider } from './contexts/SettingsContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CustomAlertProvider } from './components/CustomAlertProvider';
import { BrowserRouter } from 'react-router-dom';

class RootErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[RootErrorBoundary]', error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div style={{
        minHeight: '100vh',
        padding: 24,
        background: '#050505',
        color: '#f5f5f5',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        whiteSpace: 'pre-wrap'
      }}>
        <div style={{ color: '#ff8a65', marginBottom: 12, fontWeight: 700 }}>Root render failed</div>
        <div>{this.state.error.message}</div>
        <div style={{ marginTop: 16, color: '#999' }}>{this.state.error.stack}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RootErrorBoundary>
      <BrowserRouter>
        <SettingsProvider>
          <ThemeProvider>
            <CustomAlertProvider>
              <App />
            </CustomAlertProvider>
          </ThemeProvider>
        </SettingsProvider>
      </BrowserRouter>
    </RootErrorBoundary>
  </React.StrictMode>
);
