interface FormSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const FormSection = ({ title, subtitle, children }: FormSectionProps) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-primary mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};
